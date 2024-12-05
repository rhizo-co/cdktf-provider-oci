# `dataOciDevopsDeployEnvironments` Submodule <a name="`dataOciDevopsDeployEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployEnvironments <a name="DataOciDevopsDeployEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments oci_devops_deploy_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments(scope: Construct, id: string, config?: DataOciDevopsDeployEnvironmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig">DataOciDevopsDeployEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig">DataOciDevopsDeployEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDevopsDeployEnvironmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsDeployEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsDeployEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsDeployEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.deployEnvironmentCollection">deployEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList">DataOciDevopsDeployEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deployEnvironmentCollection`<sup>Required</sup> <a name="deployEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.deployEnvironmentCollection"></a>

```typescript
public readonly deployEnvironmentCollection: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsDeployEnvironmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList">DataOciDevopsDeployEnvironmentsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDevopsDeployEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployEnvironmentsConfig <a name="DataOciDevopsDeployEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployEnvironmentsConfig: dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDevopsDeployEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#filter DataOciDevopsDeployEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}.

---

### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployEnvironmentsDeployEnvironmentCollection: dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection = { ... }
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems: dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems = { ... }
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors: dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors = { ... }
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems: dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems = { ... }
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel: dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel = { ... }
```


### DataOciDevopsDeployEnvironmentsFilter <a name="DataOciDevopsDeployEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployEnvironmentsFilter: dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#name DataOciDevopsDeployEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#values DataOciDevopsDeployEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#regex DataOciDevopsDeployEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#name DataOciDevopsDeployEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#values DataOciDevopsDeployEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#regex DataOciDevopsDeployEnvironments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds">computeInstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType">selectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeInstanceIds`<sup>Required</sup> <a name="computeInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds"></a>

```typescript
public readonly computeInstanceIds: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selectorType`<sup>Required</sup> <a name="selectorType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType"></a>

```typescript
public readonly selectorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.networkChannelType"></a>

```typescript
public readonly networkChannelType: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.computeInstanceGroupSelectors">computeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.deployEnvironmentType">deployEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeInstanceGroupSelectors`<sup>Required</sup> <a name="computeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.computeInstanceGroupSelectors"></a>

```typescript
public readonly computeInstanceGroupSelectors: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deployEnvironmentType`<sup>Required</sup> <a name="deployEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.deployEnvironmentType"></a>

```typescript
public readonly deployEnvironmentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `networkChannel`<sup>Required</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.networkChannel"></a>

```typescript
public readonly networkChannel: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection</a>

---


### DataOciDevopsDeployEnvironmentsFilterList <a name="DataOciDevopsDeployEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsDeployEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>[]

---


### DataOciDevopsDeployEnvironmentsFilterOutputReference <a name="DataOciDevopsDeployEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsDeployEnvironmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>

---



