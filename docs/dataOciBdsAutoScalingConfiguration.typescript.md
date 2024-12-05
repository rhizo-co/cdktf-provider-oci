# `dataOciBdsAutoScalingConfiguration` Submodule <a name="`dataOciBdsAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsAutoScalingConfiguration <a name="DataOciBdsAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration oci_bds_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration(scope: Construct, id: string, config: DataOciBdsAutoScalingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig">DataOciBdsAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig">DataOciBdsAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList">DataOciBdsAutoScalingConfigurationPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policyDetails">policyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationIdInput">autoScalingConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationId">autoScalingConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policy"></a>

```typescript
public readonly policy: DataOciBdsAutoScalingConfigurationPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList">DataOciBdsAutoScalingConfigurationPolicyList</a>

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policyDetails"></a>

```typescript
public readonly policyDetails: DataOciBdsAutoScalingConfigurationPolicyDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `autoScalingConfigurationIdInput`<sup>Optional</sup> <a name="autoScalingConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationIdInput"></a>

```typescript
public readonly autoScalingConfigurationIdInput: string;
```

- *Type:* string

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `autoScalingConfigurationId`<sup>Required</sup> <a name="autoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationId"></a>

```typescript
public readonly autoScalingConfigurationId: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsAutoScalingConfigurationConfig <a name="DataOciBdsAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationConfig: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.autoScalingConfigurationId">autoScalingConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoScalingConfigurationId`<sup>Required</sup> <a name="autoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.autoScalingConfigurationId"></a>

```typescript
public readonly autoScalingConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}.

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}.

---

### DataOciBdsAutoScalingConfigurationPolicy <a name="DataOciBdsAutoScalingConfigurationPolicy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicy: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetails <a name="DataOciBdsAutoScalingConfigurationPolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetails: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyRules <a name="DataOciBdsAutoScalingConfigurationPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyRules: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyRulesMetric <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyRulesMetric: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric = { ... }
```


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold: dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsAutoScalingConfigurationPolicyDetailsList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig">scaleDownConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig">scaleInConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig">scaleOutConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig">scaleUpConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails">scheduleDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType">triggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails">DataOciBdsAutoScalingConfigurationPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `scaleDownConfig`<sup>Required</sup> <a name="scaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```typescript
public readonly scaleDownConfig: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList</a>

---

##### `scaleInConfig`<sup>Required</sup> <a name="scaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig"></a>

```typescript
public readonly scaleInConfig: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList</a>

---

##### `scaleOutConfig`<sup>Required</sup> <a name="scaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```typescript
public readonly scaleOutConfig: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList</a>

---

##### `scaleUpConfig`<sup>Required</sup> <a name="scaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```typescript
public readonly scaleUpConfig: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList</a>

---

##### `scheduleDetails`<sup>Required</sup> <a name="scheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails"></a>

```typescript
public readonly scheduleDetails: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType"></a>

```typescript
public readonly triggerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails">DataOciBdsAutoScalingConfigurationPolicyDetails</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">memoryStepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">minMemoryPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">minOcpusPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">ocpuStepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryStepSize`<sup>Required</sup> <a name="memoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```typescript
public readonly memoryStepSize: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```typescript
public readonly metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList</a>

---

##### `minMemoryPerNode`<sup>Required</sup> <a name="minMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```typescript
public readonly minMemoryPerNode: number;
```

- *Type:* number

---

##### `minOcpusPerNode`<sup>Required</sup> <a name="minOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```typescript
public readonly minOcpusPerNode: number;
```

- *Type:* number

---

##### `ocpuStepSize`<sup>Required</sup> <a name="ocpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```typescript
public readonly ocpuStepSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize">stepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```typescript
public readonly metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList</a>

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `stepSize`<sup>Required</sup> <a name="stepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```typescript
public readonly stepSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize">stepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```typescript
public readonly metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList</a>

---

##### `stepSize`<sup>Required</sup> <a name="stepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```typescript
public readonly stepSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">maxMemoryPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">maxOcpusPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">memoryStepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">ocpuStepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxMemoryPerNode`<sup>Required</sup> <a name="maxMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```typescript
public readonly maxMemoryPerNode: number;
```

- *Type:* number

---

##### `maxOcpusPerNode`<sup>Required</sup> <a name="maxOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```typescript
public readonly maxOcpusPerNode: number;
```

- *Type:* number

---

##### `memoryStepSize`<sup>Required</sup> <a name="memoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```typescript
public readonly memoryStepSize: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```typescript
public readonly metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList</a>

---

##### `ocpuStepSize`<sup>Required</sup> <a name="ocpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```typescript
public readonly ocpuStepSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">scheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">timeAndHorizontalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">timeAndVerticalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

---

##### `timeAndHorizontalScalingConfig`<sup>Required</sup> <a name="timeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```typescript
public readonly timeAndHorizontalScalingConfig: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `timeAndVerticalScalingConfig`<sup>Required</sup> <a name="timeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```typescript
public readonly timeAndVerticalScalingConfig: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">targetNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">timeRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetNodeCount`<sup>Required</sup> <a name="targetNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```typescript
public readonly targetNodeCount: number;
```

- *Type:* number

---

##### `timeRecurrence`<sup>Required</sup> <a name="timeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```typescript
public readonly timeRecurrence: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">targetMemoryPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">targetOcpusPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">targetShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">timeRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetMemoryPerNode`<sup>Required</sup> <a name="targetMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```typescript
public readonly targetMemoryPerNode: number;
```

- *Type:* number

---

##### `targetOcpusPerNode`<sup>Required</sup> <a name="targetOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```typescript
public readonly targetOcpusPerNode: number;
```

- *Type:* number

---

##### `targetShape`<sup>Required</sup> <a name="targetShape" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```typescript
public readonly targetShape: string;
```

- *Type:* string

---

##### `timeRecurrence`<sup>Required</sup> <a name="timeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```typescript
public readonly timeRecurrence: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyList <a name="DataOciBdsAutoScalingConfigurationPolicyList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList">DataOciBdsAutoScalingConfigurationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy">DataOciBdsAutoScalingConfigurationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciBdsAutoScalingConfigurationPolicyRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList">DataOciBdsAutoScalingConfigurationPolicyRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy">DataOciBdsAutoScalingConfigurationPolicy</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric">DataOciBdsAutoScalingConfigurationPolicyRulesMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyRulesMetric;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric">DataOciBdsAutoScalingConfigurationPolicyRulesMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get"></a>

```typescript
public get(index: number): DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer"></a>

```typescript
import { dataOciBdsAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules">DataOciBdsAutoScalingConfigurationPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric"></a>

```typescript
public readonly metric: DataOciBdsAutoScalingConfigurationPolicyRulesMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsAutoScalingConfigurationPolicyRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules">DataOciBdsAutoScalingConfigurationPolicyRules</a>

---



