# `dataOciAutoscalingAutoScalingConfigurations` Submodule <a name="`dataOciAutoscalingAutoScalingConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAutoscalingAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations oci_autoscaling_auto_scaling_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations(scope: Construct, id: string, config: DataOciAutoscalingAutoScalingConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig">DataOciAutoscalingAutoScalingConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig">DataOciAutoscalingAutoScalingConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAutoscalingAutoScalingConfigurationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAutoscalingAutoScalingConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAutoscalingAutoScalingConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAutoscalingAutoScalingConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations">autoScalingConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoScalingConfigurations`<sup>Required</sup> <a name="autoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations"></a>

```typescript
public readonly autoScalingConfigurations: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter"></a>

```typescript
public readonly filter: DataOciAutoscalingAutoScalingConfigurationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAutoscalingAutoScalingConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold = { ... }
```


### DataOciAutoscalingAutoScalingConfigurationsConfig <a name="DataOciAutoscalingAutoScalingConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsConfig: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAutoscalingAutoScalingConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#filter DataOciAutoscalingAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAutoscalingAutoScalingConfigurationsFilter <a name="DataOciAutoscalingAutoScalingConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciAutoscalingAutoScalingConfigurationsFilter: dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources">autoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds">coolDownInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount">maxResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount">minResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingResources`<sup>Required</sup> <a name="autoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources"></a>

```typescript
public readonly autoScalingResources: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `coolDownInSeconds`<sup>Required</sup> <a name="coolDownInSeconds" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds"></a>

```typescript
public readonly coolDownInSeconds: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxResourceCount`<sup>Required</sup> <a name="maxResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount"></a>

```typescript
public readonly maxResourceCount: number;
```

- *Type:* number

---

##### `minResourceCount`<sup>Required</sup> <a name="minResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount"></a>

```typescript
public readonly minResourceCount: number;
```

- *Type:* number

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies"></a>

```typescript
public readonly policies: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial">initial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initial`<sup>Required</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial"></a>

```typescript
public readonly initial: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule">executionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction">resourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity"></a>

```typescript
public readonly capacity: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionSchedule`<sup>Required</sup> <a name="executionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule"></a>

```typescript
public readonly executionSchedule: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `resourceAction`<sup>Required</sup> <a name="resourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction"></a>

```typescript
public readonly resourceAction: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action"></a>

```typescript
public readonly action: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric"></a>

```typescript
public readonly metric: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a>

---


### DataOciAutoscalingAutoScalingConfigurationsFilterList <a name="DataOciAutoscalingAutoScalingConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get"></a>

```typescript
public get(index: number): DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAutoscalingAutoScalingConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>[]

---


### DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAutoscalingAutoScalingConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAutoscalingAutoScalingConfigurationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>

---



