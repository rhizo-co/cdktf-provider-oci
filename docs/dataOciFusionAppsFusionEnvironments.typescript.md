# `dataOciFusionAppsFusionEnvironments` Submodule <a name="`dataOciFusionAppsFusionEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironments <a name="DataOciFusionAppsFusionEnvironments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments oci_fusion_apps_fusion_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig">DataOciFusionAppsFusionEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig">DataOciFusionAppsFusionEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFusionEnvironmentFamilyId">resetFusionEnvironmentFamilyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFusionAppsFusionEnvironmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFusionEnvironmentFamilyId` <a name="resetFusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFusionEnvironmentFamilyId"></a>

```typescript
public resetFusionEnvironmentFamilyId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList">DataOciFusionAppsFusionEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentCollection">fusionEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyIdInput">fusionEnvironmentFamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyId">fusionEnvironmentFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filter"></a>

```typescript
public readonly filter: DataOciFusionAppsFusionEnvironmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList">DataOciFusionAppsFusionEnvironmentsFilterList</a>

---

##### `fusionEnvironmentCollection`<sup>Required</sup> <a name="fusionEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentCollection"></a>

```typescript
public readonly fusionEnvironmentCollection: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFusionAppsFusionEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>[]

---

##### `fusionEnvironmentFamilyIdInput`<sup>Optional</sup> <a name="fusionEnvironmentFamilyIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyIdInput"></a>

```typescript
public readonly fusionEnvironmentFamilyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fusionEnvironmentFamilyId`<sup>Required</sup> <a name="fusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyId"></a>

```typescript
public readonly fusionEnvironmentFamilyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentsConfig <a name="DataOciFusionAppsFusionEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsConfig: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.fusionEnvironmentFamilyId">fusionEnvironmentFamilyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFusionAppsFusionEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#filter DataOciFusionAppsFusionEnvironments#filter}

---

##### `fusionEnvironmentFamilyId`<sup>Optional</sup> <a name="fusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.fusionEnvironmentFamilyId"></a>

```typescript
public readonly fusionEnvironmentFamilyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}.

---

### DataOciFusionAppsFusionEnvironmentsFilter <a name="DataOciFusionAppsFusionEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFilter: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#name DataOciFusionAppsFusionEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#values DataOciFusionAppsFusionEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#regex DataOciFusionAppsFusionEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#name DataOciFusionAppsFusionEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#values DataOciFusionAppsFusionEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#regex DataOciFusionAppsFusionEnvironments#regex}.

---

### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules = { ... }
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions: dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentsFilterList <a name="DataOciFusionAppsFusionEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFusionAppsFusionEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>[]

---


### DataOciFusionAppsFusionEnvironmentsFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFusionAppsFusionEnvironmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyId">activeKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyVersion">activeKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.currentKeyLifecycleState">currentKeyLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyId">scheduledKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyStatus">scheduledKeyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyVersion">scheduledKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledLifecycleState">scheduledLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeKeyId`<sup>Required</sup> <a name="activeKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyId"></a>

```typescript
public readonly activeKeyId: string;
```

- *Type:* string

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyVersion"></a>

```typescript
public readonly activeKeyVersion: string;
```

- *Type:* string

---

##### `currentKeyLifecycleState`<sup>Required</sup> <a name="currentKeyLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.currentKeyLifecycleState"></a>

```typescript
public readonly currentKeyLifecycleState: string;
```

- *Type:* string

---

##### `scheduledKeyId`<sup>Required</sup> <a name="scheduledKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyId"></a>

```typescript
public readonly scheduledKeyId: string;
```

- *Type:* string

---

##### `scheduledKeyStatus`<sup>Required</sup> <a name="scheduledKeyStatus" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyStatus"></a>

```typescript
public readonly scheduledKeyStatus: string;
```

- *Type:* string

---

##### `scheduledKeyVersion`<sup>Required</sup> <a name="scheduledKeyVersion" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyVersion"></a>

```typescript
public readonly scheduledKeyVersion: string;
```

- *Type:* string

---

##### `scheduledLifecycleState`<sup>Required</sup> <a name="scheduledLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledLifecycleState"></a>

```typescript
public readonly scheduledLifecycleState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.environmentMaintenanceOverride">environmentMaintenanceOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.monthlyPatchingOverride">monthlyPatchingOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterlyUpgradeBeginTimes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentMaintenanceOverride`<sup>Required</sup> <a name="environmentMaintenanceOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.environmentMaintenanceOverride"></a>

```typescript
public readonly environmentMaintenanceOverride: string;
```

- *Type:* string

---

##### `monthlyPatchingOverride`<sup>Required</sup> <a name="monthlyPatchingOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.monthlyPatchingOverride"></a>

```typescript
public readonly monthlyPatchingOverride: string;
```

- *Type:* string

---

##### `quarterlyUpgradeBeginTimes`<sup>Required</sup> <a name="quarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```typescript
public readonly quarterlyUpgradeBeginTimes: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue">beginTimesValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType">overrideType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beginTimesValue`<sup>Required</sup> <a name="beginTimesValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue"></a>

```typescript
public readonly beginTimesValue: string;
```

- *Type:* string

---

##### `overrideType`<sup>Required</sup> <a name="overrideType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType"></a>

```typescript
public readonly overrideType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.additionalLanguagePacks">additionalLanguagePacks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.appliedPatchBundles">appliedPatchBundles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.createFusionEnvironmentAdminUserDetails">createFusionEnvironmentAdminUserDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.dnsPrefix">dnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentFamilyId">fusionEnvironmentFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentType">fusionEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.idcsDomainUrl">idcsDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.isBreakGlassEnabled">isBreakGlassEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyInfo">kmsKeyInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lockboxId">lockboxId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.publicUrl">publicUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.refresh">refresh</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.subscriptionIds">subscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.systemName">systemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpcomingMaintenance">timeUpcomingMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalLanguagePacks`<sup>Required</sup> <a name="additionalLanguagePacks" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.additionalLanguagePacks"></a>

```typescript
public readonly additionalLanguagePacks: string[];
```

- *Type:* string[]

---

##### `appliedPatchBundles`<sup>Required</sup> <a name="appliedPatchBundles" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.appliedPatchBundles"></a>

```typescript
public readonly appliedPatchBundles: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createFusionEnvironmentAdminUserDetails`<sup>Required</sup> <a name="createFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.createFusionEnvironmentAdminUserDetails"></a>

```typescript
public readonly createFusionEnvironmentAdminUserDetails: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsPrefix`<sup>Required</sup> <a name="dnsPrefix" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.dnsPrefix"></a>

```typescript
public readonly dnsPrefix: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `fusionEnvironmentFamilyId`<sup>Required</sup> <a name="fusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentFamilyId"></a>

```typescript
public readonly fusionEnvironmentFamilyId: string;
```

- *Type:* string

---

##### `fusionEnvironmentType`<sup>Required</sup> <a name="fusionEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentType"></a>

```typescript
public readonly fusionEnvironmentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsDomainUrl`<sup>Required</sup> <a name="idcsDomainUrl" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.idcsDomainUrl"></a>

```typescript
public readonly idcsDomainUrl: string;
```

- *Type:* string

---

##### `isBreakGlassEnabled`<sup>Required</sup> <a name="isBreakGlassEnabled" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.isBreakGlassEnabled"></a>

```typescript
public readonly isBreakGlassEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyInfo`<sup>Required</sup> <a name="kmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyInfo"></a>

```typescript
public readonly kmsKeyInfo: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lockboxId`<sup>Required</sup> <a name="lockboxId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lockboxId"></a>

```typescript
public readonly lockboxId: string;
```

- *Type:* string

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList</a>

---

##### `publicUrl`<sup>Required</sup> <a name="publicUrl" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.publicUrl"></a>

```typescript
public readonly publicUrl: string;
```

- *Type:* string

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.refresh"></a>

```typescript
public readonly refresh: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string[];
```

- *Type:* string[]

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.systemName"></a>

```typescript
public readonly systemName: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpcomingMaintenance`<sup>Required</sup> <a name="timeUpcomingMaintenance" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpcomingMaintenance"></a>

```typescript
public readonly timeUpcomingMaintenance: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.sourceFusionEnvironmentId">sourceFusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeOfRestorationPoint">timeOfRestorationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceFusionEnvironmentId`<sup>Required</sup> <a name="sourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.sourceFusionEnvironmentId"></a>

```typescript
public readonly sourceFusionEnvironmentId: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeOfRestorationPoint`<sup>Required</sup> <a name="timeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeOfRestorationPoint"></a>

```typescript
public readonly timeOfRestorationPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection</a>

---



