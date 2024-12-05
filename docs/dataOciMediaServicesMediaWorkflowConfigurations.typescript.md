# `dataOciMediaServicesMediaWorkflowConfigurations` Submodule <a name="`dataOciMediaServicesMediaWorkflowConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowConfigurations <a name="DataOciMediaServicesMediaWorkflowConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations oci_media_services_media_workflow_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations(scope: Construct, id: string, config?: DataOciMediaServicesMediaWorkflowConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig">DataOciMediaServicesMediaWorkflowConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig">DataOciMediaServicesMediaWorkflowConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMediaServicesMediaWorkflowConfigurationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isConstruct"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList">DataOciMediaServicesMediaWorkflowConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.mediaWorkflowConfigurationCollection">mediaWorkflowConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filter"></a>

```typescript
public readonly filter: DataOciMediaServicesMediaWorkflowConfigurationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList">DataOciMediaServicesMediaWorkflowConfigurationsFilterList</a>

---

##### `mediaWorkflowConfigurationCollection`<sup>Required</sup> <a name="mediaWorkflowConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.mediaWorkflowConfigurationCollection"></a>

```typescript
public readonly mediaWorkflowConfigurationCollection: DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMediaServicesMediaWorkflowConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowConfigurationsConfig <a name="DataOciMediaServicesMediaWorkflowConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowConfigurationsConfig: dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#compartment_id DataOciMediaServicesMediaWorkflowConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#display_name DataOciMediaServicesMediaWorkflowConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#id DataOciMediaServicesMediaWorkflowConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#state DataOciMediaServicesMediaWorkflowConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#compartment_id DataOciMediaServicesMediaWorkflowConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#display_name DataOciMediaServicesMediaWorkflowConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMediaServicesMediaWorkflowConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#filter DataOciMediaServicesMediaWorkflowConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#id DataOciMediaServicesMediaWorkflowConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#state DataOciMediaServicesMediaWorkflowConfigurations#state}.

---

### DataOciMediaServicesMediaWorkflowConfigurationsFilter <a name="DataOciMediaServicesMediaWorkflowConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowConfigurationsFilter: dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#name DataOciMediaServicesMediaWorkflowConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#values DataOciMediaServicesMediaWorkflowConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#regex DataOciMediaServicesMediaWorkflowConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#name DataOciMediaServicesMediaWorkflowConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#values DataOciMediaServicesMediaWorkflowConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_configurations#regex DataOciMediaServicesMediaWorkflowConfigurations#regex}.

---

### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection: dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection = { ... }
```


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems: dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems = { ... }
```


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks: dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowConfigurationsFilterList <a name="DataOciMediaServicesMediaWorkflowConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesMediaWorkflowConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>[]

---


### DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesMediaWorkflowConfigurationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsFilter">DataOciMediaServicesMediaWorkflowConfigurationsFilter</a>

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocks</a>

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsLocksList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItems</a>

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference <a name="DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowConfigurations.DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection">DataOciMediaServicesMediaWorkflowConfigurationsMediaWorkflowConfigurationCollection</a>

---



