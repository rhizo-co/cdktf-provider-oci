# `dataOciAutoscalingAutoScalingConfiguration` Submodule <a name="`dataOciAutoscalingAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAutoscalingAutoScalingConfiguration <a name="DataOciAutoscalingAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration oci_autoscaling_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration(scope: Construct, id: string, config: DataOciAutoscalingAutoScalingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig">DataOciAutoscalingAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig">DataOciAutoscalingAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAutoscalingAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAutoscalingAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAutoscalingAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingResources">autoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.coolDownInSeconds">coolDownInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.maxResourceCount">maxResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.minResourceCount">minResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList">DataOciAutoscalingAutoScalingConfigurationPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationIdInput">autoScalingConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationId">autoScalingConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoScalingResources`<sup>Required</sup> <a name="autoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingResources"></a>

```typescript
public readonly autoScalingResources: DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `coolDownInSeconds`<sup>Required</sup> <a name="coolDownInSeconds" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.coolDownInSeconds"></a>

```typescript
public readonly coolDownInSeconds: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxResourceCount`<sup>Required</sup> <a name="maxResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.maxResourceCount"></a>

```typescript
public readonly maxResourceCount: number;
```

- *Type:* number

---

##### `minResourceCount`<sup>Required</sup> <a name="minResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.minResourceCount"></a>

```typescript
public readonly minResourceCount: number;
```

- *Type:* number

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.policies"></a>

```typescript
public readonly policies: DataOciAutoscalingAutoScalingConfigurationPoliciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList">DataOciAutoscalingAutoScalingConfigurationPoliciesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `autoScalingConfigurationIdInput`<sup>Optional</sup> <a name="autoScalingConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationIdInput"></a>

```typescript
public readonly autoScalingConfigurationIdInput: string;
```

- *Type:* string

---

##### `autoScalingConfigurationId`<sup>Required</sup> <a name="autoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationId"></a>

```typescript
public readonly autoScalingConfigurationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAutoscalingAutoScalingConfigurationAutoScalingResources <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationAutoScalingResources: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationConfig <a name="DataOciAutoscalingAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationConfig: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.autoScalingConfigurationId">autoScalingConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#auto_scaling_configuration_id DataOciAutoscalingAutoScalingConfiguration#auto_scaling_configuration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoScalingConfigurationId`<sup>Required</sup> <a name="autoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.autoScalingConfigurationId"></a>

```typescript
public readonly autoScalingConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#auto_scaling_configuration_id DataOciAutoscalingAutoScalingConfiguration#auto_scaling_configuration_id}.

---

### DataOciAutoscalingAutoScalingConfigurationPolicies <a name="DataOciAutoscalingAutoScalingConfigurationPolicies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPolicies: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPoliciesCapacity: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRules <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPoliciesRules: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold: dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationAutoScalingResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationAutoScalingResources</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial">initial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initial`<sup>Required</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial"></a>

```typescript
public readonly initial: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule">executionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction">resourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies">DataOciAutoscalingAutoScalingConfigurationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity"></a>

```typescript
public readonly capacity: DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionSchedule`<sup>Required</sup> <a name="executionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule"></a>

```typescript
public readonly executionSchedule: DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `resourceAction`<sup>Required</sup> <a name="resourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction"></a>

```typescript
public readonly resourceAction: DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPolicies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies">DataOciAutoscalingAutoScalingConfigurationPolicies</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules">DataOciAutoscalingAutoScalingConfigurationPoliciesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action"></a>

```typescript
public readonly action: DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric"></a>

```typescript
public readonly metric: DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationPoliciesRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules">DataOciAutoscalingAutoScalingConfigurationPoliciesRules</a>

---



